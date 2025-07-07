import json, os
import sqlite3

def verarbeite_json_puffer(pfad='temp/inventar.json'):
    if os.path.exists(pfad):
        with open(pfad, 'r', encoding='utf-8') as f:
            daten = json.load(f)
        
        # In die Datenbank schreiben
        conn = sqlite3.connect('inventar.db')
        c = conn.cursor()
        c.execute("INSERT INTO items (bild, beschreibung, tags) VALUES (?, ?, ?)",
                  (daten['bild'], daten['beschreibung'], ','.join(daten['tags'])))
        conn.commit()
        conn.close()

        os.remove(pfad)
        print("✅ Daten übernommen und Datei gelöscht.")
    else:
        print("⏳ Noch keine neue Datei.")
