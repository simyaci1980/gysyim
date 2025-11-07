import os
import json
from datetime import date


def _load_from_static():
    # try to load a JSON questions file at static/data/questions.json
    here = os.path.dirname(__file__)
    repo_root = os.path.normpath(os.path.join(here, '..'))
    path = os.path.join(repo_root, 'static', 'data', 'questions.json')
    if os.path.exists(path):
        try:
            with open(path, 'r', encoding='utf-8') as f:
                data = json.load(f)
                if isinstance(data, list) and data:
                    return data
        except Exception:
            return None
    return None


def _builtin_questions():
    # Small fallback question set (keeps things simple)
    return [
        {
            'metin': 'Türkiye Cumhuriyeti Anayasası kaç yılında kabul edilmiştir?',
            'secenekler': ['1920', '1921', '1982', '2001'],
            'dogruCevap': '1982'
        },
        {
            'metin': 'Adalet Bakanlığı merkezi nerededir?',
            'secenekler': ['Ankara', 'İstanbul', 'İzmir', 'Bursa'],
            'dogruCevap': 'Ankara'
        },
        {
            'metin': 'Ceza kanununda suç işleyen kimseye ne uygulanır?',
            'secenekler': ['Ceza', 'İhtar', 'Uyarı', 'Para cezası'],
            'dogruCevap': 'Ceza'
        }
    ]


def get_daily_question():
    arr = _load_from_static() or _builtin_questions()
    today = date.today()
    # deterministic index by date
    idx = (today.toordinal()) % len(arr)
    return arr[idx]
