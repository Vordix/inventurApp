import sqlite3

def init_db():
    with sqlite3.connect("database.db") as conn:
        c = conn.cursor()
        # Tabelle anlegen, falls noch nicht vorhanden
        c.execute("""
            CREATE TABLE IF NOT EXISTS Test (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT
            )
        """)
        conn.commit()

def insert_data(name):
    with sqlite3.connect("database.db") as conn:
        c = conn.cursor()
        # Einen Datensatz einfügen
        c.execute("INSERT INTO Test (name) VALUES (?)", (name,))
        conn.commit()

def read_data():
    with sqlite3.connect("database.db") as conn:
        c = conn.cursor()
        c.execute("SELECT * FROM Test")
        rows = c.fetchall()
        print("Daten in Tabelle Test:")
        for row in rows:
            print(row)

if __name__ == "__main__":
    init_db()
    insert_data("Hallo Welt")
    read_data()
