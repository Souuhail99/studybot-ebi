# StudyBot – lokale Einrichtung und GitHub-Upload

## A. Repository auf GitHub hochladen

1. Das ZIP-Paket **entpacken**; nicht die ZIP-Datei als einzige Datei hochladen.
2. Auf https://github.com/new ein Repository, z. B. **`azure-university-studybot`**, erstellen.
3. Zunächst **Private** auswählen, bis die Veröffentlichungsrechte geklärt sind.
4. Kein automatisches README generieren (ein `README.md` ist vorhanden).
5. Im neuen Repository **Add file → Upload files** auswählen und den **Inhalt** des entpackten Ordners hochladen. Versteckte Datei `.gitignore` berücksichtigen.
6. Commit message: `Add StudyBot documentation and Web Chat example`.
7. In GitHub prüfen, ob `README.md` sichtbar ist und beide Screenshots erscheinen.
8. Den Schlüssel niemals als Datei hochladen (`.env` ist nur lokal).

## B. Optional: Chat-Oberfläche lokal ausprobieren

Voraussetzungen: Node.js 20.6+ und ein aktivierter Azure-Bot mit Direct-Line-Secret.

1. `.env.example` zu `.env` kopieren.
2. In `.env` **lokal** den aktuellen (ggf. erneuerten) Direct-Line-Secret einsetzen.
3. Im Projektverzeichnis `npm start` ausführen.
4. Im Browser `http://localhost:3000` öffnen.
5. Der Server generiert bei einem Aufruf von `/api/directline-token` einen kurzlebigen Azure-Token. Der Browser erhält **nie** den dauerhaften Secret.

Unter Windows PowerShell kannst du die Kopie mit `Copy-Item .env.example .env` erstellen. Falls der Azure-Bot nicht mehr aktiv ist oder kein passender Kanal konfiguriert wurde, bleibt das Chatfenster ohne echte Antwort.

**Wichtig:** Das lokale Beispiel ist kein vollständiger Azure-Hosting-Workflow. Ein öffentlicher Server braucht zusätzliche Absicherungen und eine eigene sichere Deployment-Konfiguration.
