# Implementierungsstand und Materialbasis

## Herkunft der Bestandteile

| Bestandteil | Grundlage | Status |
|---|---|---|
| Azure-Ressourcen, FAQ, Architektur | Originale Projekt-PDF (Sommersemester 2025) | Dokumentiert |
| Antworten des StudyBot | Demonstrationsvideo / Screenshots | Vorgeführt |
| HTML Web Chat, `createStore`, `webchat/join` | Neu übermittelter Screenshot von `index.html` | **Rekonstruktion**, da nur ein Ausschnitt vorliegt |
| Lokaler Node-Server mit `/api/directline-token` | Ergänzung für sicheren Betrieb | **Neu erstellt**, nicht als Originalleistung behauptet |
| Azure Storage, Anfrage-Logs, Reporting | Aufgabenstellung / Konzeptskizze | **Umsetzung nicht belegt** |

## Inhalt des Quellcode-Screenshots

Der Screenshot zeigt:

- `styleOptions` mit `botAvatarInitials: 'SB'` und `userAvatarInitials: 'DU'`;
- eine Middleware über `window.WebChat.createStore()`;
- beim Ereignis `DIRECT_LINE/CONNECT_FULFILLED` ein `WEB_CHAT/SEND_EVENT` mit `name: 'webchat/join'` und `language: 'de-DE'`;
- einen Dispatch mit einer Begrüßungsnachricht;
- den Aufruf `window.WebChat.renderWebChat()` und `createDirectLine({ secret: ... })`.

Im übermittelten Bild ist **nur ein Teil** des Geheimschlüssels sichtbar; dieser wurde **nicht** übernommen, veröffentlicht oder ausgeschrieben. Im neuen HTML wird die Begrüßung sichtbar als Überschrift angezeigt. Die Middleware bleibt erhalten; für die Verbindung wird ein vom lokalen Server erzeugter Token verwendet.

## Grenzen

1. Der originale komplette Inhalt der `index.html`, der Backend-Code des Azure-Bots und die Infrastrukturkonfiguration wurden nicht übergeben.
2. Die Demo kann ohne gültigen Bot-Zugang nicht eigenständig Fragen beantworten.
3. Die `data/sample-faqs.json` dokumentiert Konzeptinhalte und ist nicht automatisch an Azure angebunden.
4. Die Screenshot-Antworten sind beispielhaft und nicht verbindlich.
5. Das Projekt ist eine Gruppenarbeit. Individuelle Beiträge sollten nur so bezeichnet werden, wie sie tatsächlich geleistet wurden.
