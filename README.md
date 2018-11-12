# Scaling your Angular Application with 1.21 GIGAWATTS
## Reactive programming with RxJS and use of NgRx for managing application state.

Heutzutage werden Single Page Applications immer komplexer. Es gibt mehr Datenabfragen gegen Web Services, UI Elemente sind miteinander verknüpft und ändern ihren Zustand abhängig voneinander. Zudem gibt es Daten, die auf Client-Seite gecached werden sollen. Dies sind Beispiele, die den Zustand der Anwendung beschreiben und ändern.

Wie managen wir diesen Zustand in unserer Applikation? Hierzu gibt es mehrere Patterns, die alle ihre Vor- und Nachteile mit sich bringen. Ein Beispiel in Angular, ist es einen Service zu nutzen, um Daten global verfügbar zu machen. Alternativ können Daten auch durch mehrere Komponenten per Bindings geschoben werden. Dies sind beides nicht immer die idealen Vorgehensweisen, gerade wenn die Applikation oder der Use Case komplexer wird.

Als "neue" Alternative gibt es NgRx. Doch was ist NgRx? NgRx ist eine Angular Erweiterung, die es dem Entwickler ermöglicht den Zustand der Anwendung mithilfe des Redux Patterns zu managen. Gerne würde ich Euch einen kleinen Überblick über diese Erweiterung geben. Dabei werden wir an folgenden Themen vorbei kommen:

## Agenda
* RxJS 101
    * Streams
    * Observables
    * Operators
* Flux Pattern
* Redux Pattern
* NgRx
    * Store
    * Effects
    * Debugging
* Diskussion
