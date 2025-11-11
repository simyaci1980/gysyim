#!/usr/bin/env python3
import re
import json

# script.js'i oku
with open('static/js/script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# sorular dizisini bul - daha geniş pattern
match = re.search(r'const sorular\s*=\s*\[(.*)\];?\s*$', content, re.DOTALL | re.MULTILINE)
if not match:
    print("❌ Sorular bulunamadı!")
    exit(1)

js_array_content = match.group(1)

# Her bir soru objesini ayır
# Pattern: { ile başlayıp }, ile biten bloklar
question_blocks = re.findall(r'\{[^}]*metin:[^}]*secenekler:[^}]*dogruCevap:[^}]*\}', js_array_content, re.DOTALL)

print(f"✓ {len(question_blocks)} soru bloğu bulundu")

questions = []
for i, block in enumerate(question_blocks):
    try:
        # metin'i çıkar
        metin_match = re.search(r'metin:\s*["\'](.+?)["\'](?:\s*,)?', block, re.DOTALL)
        if not metin_match:
            metin_match = re.search(r'metin:\s*"([^"]+)"', block)
        
        # secenekler array'ini çıkar
        secenekler_match = re.search(r'secenekler:\s*\[(.*?)\]', block, re.DOTALL)
        
        # dogruCevap'ı çıkar
        dogru_match = re.search(r'dogruCevap:\s*["\'](.+?)["\']', block, re.DOTALL)
        if not dogru_match:
            dogru_match = re.search(r'dogruCevap:\s*"([^"]+)"', block)
        
        if metin_match and secenekler_match and dogru_match:
            metin = metin_match.group(1).strip()
            dogru = dogru_match.group(1).strip()
            
            # Seçenekleri ayır
            secenekler_str = secenekler_match.group(1)
            # Tırnak içindeki her şeyi bul
            secenekler_list = re.findall(r'["\']([^"\']+)["\']', secenekler_str)
            
            if secenekler_list and len(secenekler_list) > 0:
                questions.append({
                    'metin': metin,
                    'secenekler': secenekler_list,
                    'dogruCevap': dogru
                })
    except Exception as e:
        print(f"⚠ Soru {i+1} parse edilemedi: {e}")
        continue

print(f"✓ {len(questions)} soru başarıyla parse edildi")

if questions:
    # JSON olarak kaydet
    with open('static/data/questions.json', 'w', encoding='utf-8') as f:
        json.dump(questions, f, ensure_ascii=False, indent=2)
    
    print(f"✓ static/data/questions.json dosyası oluşturuldu")
    print(f"✓ İlk soru: {questions[0]['metin'][:60]}...")
    print(f"✓ Son soru: {questions[-1]['metin'][:60]}...")
else:
    print("❌ Hiç soru parse edilemedi!")
    exit(1)
