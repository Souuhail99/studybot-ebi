# Sicherheit und Veröffentlichung

1. **Direct-Line-Secret nicht öffentlich teilen.** Im bereitgestellten Screenshot war ein Teil eines Secrets sichtbar. Ist der Schlüssel echt und noch gültig, in Azure **rotieren/neu erzeugen**, bevor die App weitergegeben wird.
2. **Keine Zugangsdaten in `index.html`.** Der Browser holt sich einen zeitlich begrenzten Token von `/api/directline-token`. Die lokale `.env` wird von `.gitignore` ausgeschlossen.
3. **Nur lokaler Beispielserver.** `server.mjs` lauscht standardmäßig auf `127.0.0.1`. Für eine öffentliche Bereitstellung fehlen u. a. Authentifizierung, Rate Limits, Abuse-Schutz, Logging-Regeln und sichere Hosting-Konfiguration.
4. **Screenshots prüfen.** Keine Benutzernamen, IDs, Abrechnungskonten, Azure-Schlüssel, Projektgruppendaten oder vertraulichen Verwaltungsdaten öffentlich zeigen.
5. **Gruppenrechte berücksichtigen.** Vor öffentlichem Veröffentlichen von gemeinsamen Projektergebnissen und Hochschule-Dokumenten die Erlaubnis der Beteiligten klären.
6. **Nicht mit echten Studierendendaten testen.** FAQ-Antworten beziehen sich auf eine fiktive Hochschule.

Referenzen:
- https://learn.microsoft.com/de-de/azure/bot-service/bot-service-channel-connect-directline?view=azure-bot-service-4.0
- https://github.com/microsoft/BotFramework-WebChat/blob/main/docs/WELCOME_MESSAGE.md
