// daily_question.js
// Basit: tarihe göre diziden bir soru seçer ve gösterir
// Sorularınız zaten script.js içinde `const sorular = [...]` şeklinde mevcut olduğunu söylediniz.
// Bu dosya, sayfa yüklendiğinde `sorular` dizisinden bugüne karşılık gelen indeksi hesaplayıp gösterir.

(function(){
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // MODE: 'sequential' -> her gün sıradaki soru (default)
    //       'random' -> her gün deterministic random soru (aynı gün tüm kullanıcılara aynı soru)
    const DAILY_MODE = window.DAILY_MODE || 'sequential';

    function getDailyIndex(total) {
        const start = new Date(2025, 0, 1); // referans tarih (2025-01-01)
        const today = new Date();
        const diff = Math.floor((today - start) / (1000*60*60*24));
        if (DAILY_MODE === 'sequential') {
            return diff % total;
        }
        // deterministic pseudo-random seeded by date
        const seed = diff;
        // simple LCG
        let x = (seed * 1664525 + 1013904223) % 4294967296;
        return x % total;
    }

    function renderQuestion(qObj) {
        const container = document.getElementById('daily-question');
        if(!container) return;

        container.innerHTML = '';

        const card = document.createElement('div');
        card.className = 'card mb-4 w-100';
        card.style.maxWidth = '1000px';

        const body = document.createElement('div');
        body.className = 'card-body';

        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = 'Günün Sorusu';

        const text = document.createElement('p');
        text.className = 'card-text';
        text.innerHTML = escapeHtml(qObj.metin);

        const list = document.createElement('div');
        qObj.secenekler.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'btn btn-outline-primary d-block mb-2';
            btn.style.width = '100%';
            btn.textContent = opt;
            btn.dataset.idx = idx;
            btn.addEventListener('click', function(){
                const chosen = this.textContent.trim();
                const correct = qObj.dogruCevap.trim().toUpperCase();
                const isCorrect = chosen.trim().toUpperCase() === correct;

                // Buton stilini güncelle
                if(isCorrect) {
                    this.className = 'btn btn-success d-block mb-2';
                    this.textContent = '✓ ' + this.textContent;
                } else {
                    this.className = 'btn btn-danger d-block mb-2';
                    this.textContent = '✗ ' + this.textContent;
                    // doğru cevabı işaretle
                    Array.from(container.querySelectorAll('button')).forEach(b => {
                        if(b.textContent.trim().toUpperCase().includes(qObj.dogruCevap.trim().toUpperCase())) {
                            b.className = 'btn btn-success d-block mb-2';
                        }
                    });
                }

                // Kullanıcıya anında geribildirim göster (kaydetme yok)
                try {
                    // Eğer yanlışsa seçilen kırmızı, doğru olanı yeşil göster
                    if(!isCorrect){
                        this.className = 'btn btn-danger d-block mb-2';
                        this.textContent = '✗ ' + this.textContent.replace(/^✗ |^✓ /, '');
                        Array.from(container.querySelectorAll('button')).forEach(b => {
                            if(b.textContent.trim().toUpperCase().includes(qObj.dogruCevap.trim().toUpperCase())) {
                                b.className = 'btn btn-success d-block mb-2';
                                b.textContent = '✓ ' + b.textContent.replace(/^✗ |^✓ /, '');
                            }
                        });
                    } else {
                        this.className = 'btn btn-success d-block mb-2';
                        this.textContent = '✓ ' + this.textContent.replace(/^✗ |^✓ /, '');
                    }
                } catch(e) {}
            });
            list.appendChild(btn);
        });

        body.appendChild(title);
        body.appendChild(text);
        body.appendChild(list);
        card.appendChild(body);
        container.appendChild(card);

        // Not: cevaplar sunucuda saklanmaz; kullanıcılar tekrar seçebilirler.
    }

    // Public: init fonksiyonu
    window.dailyQuestionInit = function(sorular){
        if(!Array.isArray(sorular) || sorular.length === 0) return;
        const idx = getDailyIndex(sorular.length);
        const q = sorular[idx];
        renderQuestion(q);
    }

})();

// Eğer sayfada `sorular` dizisi yoksa, olası static yolları deneyerek script.js'i yükle ve init et
(function(){
    function tryInit(){
        if(window.sorular && Array.isArray(window.sorular) && window.sorular.length>0){
            try{ window.dailyQuestionInit(window.sorular); }catch(e){}
            return true;
        }
        return false;
    }

    if(tryInit()) return;

    const candidates = [
        '/static/js/script.js',
        '/static/yaziisleri11/js/script.js',
        '/static/yaziisleri1/yaziisleri11/js/script.js'
    ];

    let loaded = false;
    candidates.forEach(function(path){
        if(loaded) return;
        const s = document.createElement('script');
        s.src = path;
        s.onload = function(){
            if(tryInit()){
                loaded = true;
            }
        };
        s.onerror = function(){};
        document.head.appendChild(s);
    });

    // Son çare: eğer 3 saniye içinde init olmazsa, hiçbir işlem yapma
    setTimeout(function(){ if(!loaded) console.warn('daily_question: sorular bulunamadı.'); }, 3000);
})();
