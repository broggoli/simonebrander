import React, {useState} from 'react'

function TutuComponent(){

    const [text1, setText1] = useState(true);
    const [text2, setText2] = useState(false);
    const [text3, setText3] = useState(false);

    function toggleText(textNr) {
        switch (textNr) {
            case 1: 
                setText1(prev => !prev)
                break;
            case 2: 
                setText2(prev => !prev)
                break;
            case 3: 
                setText3(prev => !prev)
                break;
            default:
                break;
        }
    }

    return (
        <div className="w-2/4">
            <div id="viewChoice">
                <h2 className="flex-row space-x-2 my-3">
                    <button className={`textToggle1 cursor-pointer font-bold text-xl ${text1 ? "underline" : ""}`} onClick={() => toggleText(1)}>1</button><span className=" text-xl "> / </span>
                    <button className={`textToggle1 cursor-pointer font-bold text-xl ${text2 ? "underline" : ""}`} onClick={() => toggleText(2)}>2</button><span className=" text-xl "> / </span>
                    <button className={`textToggle1 cursor-pointer font-bold text-xl ${text3 ? "underline" : ""}`} onClick={() => toggleText(3)}>3</button>
                </h2>
            </div>
                <h3 className="text-2xl">Schwanenseetänzer</h3>
                <p>
                <span className={text1 ? "": "text-white"}>Seine Tränen sind wie die lackierten Nägel seines Sohnes. </span><span className={text2 ? "": "text-white"}> Er weint selten.</span><span className={text1 ? "": "text-white"}> Kaum wahrnehmbar schüttelt er den Kopf, während sein Lachen darauf hinweist, dass er der Situation nicht gewachsen ist.</span><span className={text2 ? "": "text-white"}> Sich seinem Lachen anzuschliessen, vertreibt die düsteren Gedanken. Diese Spur übergangener Irritation ist ein Kreis.</span><span className={text3 ? "": "text-white"}> Er spielt ein anders Spiel. Ihm gehört die Welt tatsächlich.</span> <span className={text1 ? "": "text-white"}>Er, weit davon entfernt, tuntig zu sein, ist das, was der meint, der sagt „sei ein richtiger Mann!“. Daran hält er fest, auch wenn der Mann ein Geheimnis geworden ist.</span> <span className={text3 ? "": "text-white"}>Er kennt den Diskurs. Er ist reflektiert, ist einer, der vieles hinterfragt. Er muss einen Schritt voraus sein und achtet nicht auf die Männer im Tutu. Er ist ihr Gegenteil, Geheimnisse ziehen ihn an.</span><span className={text2 ? "": "text-white"}> Orientierung ist wichtig. Seine Orientierung steht zwischen uns.</span> <span className={text3 ? "": "text-white"}>Er kann sich oft viel leisten. Für ihn ist es keine Frage, Bescheid zu wissen.</span>
                </p>
                <p>
                <span className={text1 ? "": "text-white"}>Er kennt keine Scham über schlechte Schulleistungen, sie sind für ihn eine Auszeichnung.</span><span className={text2 ? "": "text-white"}> Er ist einer, der keine grossen Fragen stellt. Keiner, der alles in Frage stellt. Er ist einer, der aus Bequemlichkeit lieber nichts in Frage stellt und auch gerne und gut schweigt. Er ist einer, der besser schweigt. Einer, der sich nicht überall Gehör verschaffen kann. Er ist einer, der auf seinem Standpunkt beharrt.</span><span className={text3 ? "": "text-white"}> Er hört sie nicht.</span><span className={text1 ? "": "text-white"}> Seine Eltern ermöglichten ihm eine Berufsausbildung. Das ist in seinen Augen ein Privileg.</span><span className={text3 ? "": "text-white"}> Er denkt, es gibt nichts, was er nicht versteht.</span><span className={text1 ? "": "text-white"}> Danach bediente er sich, soweit ihm die Welt erlaubte.</span><span className={text3 ? "": "text-white"}> Er weiss, dass er privilegiert ist. Er zeigt auf Privilegierte, bezichtigt sich selbst. Er entschuldigt sich oft, aber nicht bei ihnen, denn sie bedingen sich gegenseitig.</span><span className={text1 ? "": "text-white"}> Sein beruflicher Erfolg beförderte ihn von der Mietwohnung in das eigene Haus auf dem Land.</span><span className={text2 ? "": "text-white"}> Der Erfolg legt sich wie ein falsches Kleid um seine Schultern. Er strebt nicht danach, Ungerechtigkeit aus der Welt zu schaffen. Lieber kehrt er sie unter den Teppich. Beharrlich geht er seinen Weg.</span><span className={text1 ? "": "text-white"}> Der Aufstieg endete da, wo ihn die Welt auf seinen Platz verwies. Er scheiterte als Vorgesetzter.</span><span className={text3 ? "": "text-white"}> Manche scheitern heroisch. Kleine Männer scheitern kläglich.</span>
                </p>
                <p> 
                <span className={text1 ? "": "text-white"}>Sein Humor ist keine Strategie. Er ist persönlicher Ausdruck, Weltaneignung und Bewältigungstaktik.</span><span className={text3 ? "": "text-white"}> Diesen Humor versteht er nicht.</span><span className={text1 ? "": "text-white"}> Es wird gelacht über den Anwalt mit dem unverschämten Honorar, über die wohlhabenden, feinen Kund_innen seiner Frau, über Missgeschicke bei Geschäftsessen.</span><span className={text2 ? "": "text-white"}> Sein Humor schafft Ausgleich. Er richtet sich nach oben. Auch er tritt nach unten. Weil er nicht kämpferisch ist, gibt er sich stark.</span><span className={text1 ? "": "text-white"}> Zu vernehmen ist das Lachen derer, die lieben, was sie haben, weil sie nicht haben, was sie lieben. Laut und unmittelbar nimmt es sich den Raum, aber ohne Nachklang.</span><span className={text2 ? "": "text-white"}> Er will sich kein Gehör verschaffen.</span><span className={text3 ? "": "text-white"}> Er ist die Instanz. Sein Blick ist ebenso verstellt wie die Bühnen der Schwanenseetänzer.</span><span className={text3 ? "": "text-white"}> Meine Zuneigung kippt in Ekel und wieder zurück. Seine Freiheit gibt es nur auf Kosten anderer.</span>
                </p>
                <p>
                <span className={text1 ? "": "text-white"}>Die Beschreibung hat sich bereits verselbständigt. Dieser Prozess wird beschleunigt, sobald Dritte sie lesen.</span><span className={text3 ? "": "text-white"}> Sein Urteil ist zeitgenössisch.</span><span className={text1 ? "": "text-white"}> Ihn zu beschreiben ist eine Gratwanderung, wenn er weder zum Exoten noch zum Proll verkommen soll.</span><span className={text2 ? "": "text-white"}> Ihn unabhängig von den Anderen zu beschreiben geht nicht. Es scheint mir unmöglich, keine Distanz zu ihm zu nehmen. Ich bin involviert.</span>
                </p>
                <p>  
                <span className={text1 ? "": "text-white"}>Sein Schwanensee-Tanz steht für weitere humoristische Inszenierungen. Hätte ihn niemand gefilmt, so wäre er nur eine lose Erinnerung.</span><span className={text2 ? "": "text-white"}> Von der Erinnerung, die sowieso verschwindet, zur Erinnerung, die zufällig irgendwann verloren geht.</span><span className={text1 ? "": "text-white"}> Das Video provoziert bei den Einen das Lachen und bei den Anderen diese ambivalenten Gefühle.</span><span className={text3 ? "": "text-white"}> Er schafft Trends und übt aus analytischer Distanz Verrat.</span><span className={text1 ? "": "text-white"}> Gefühle, die von oben kommen, von dort wo Trash zu High Trash verwandelt wird, die zu verstehen nur diejenigen vermögen, die diesen Ort des Dazwischen kennen.</span><span className={text2 ? "": "text-white"}> In mir gibt es zwei verschiedene Welten.</span>
                </p>
                <p>
                <span className={text1 ? "": "text-white"}>Seine Inszenierung gehört zur Familientradition, „an Festen etwas Lustiges machen“.</span> <span className={text3 ? "": "text-white"}>Seine Familie feiert andere Feste. Sein Vater würde nicht so locker im Tutu über die Bühne hüpfen. Das ist ihm fremd. Er übersieht dieses Talent und vergisst, was er sich vom Dilettantischen verspricht.</span><span className={text1 ? "": "text-white"}> Die Frage nach dem Verlauf des 4. Aktes stellt sich ihm nicht. Die Rolle der Schwanenprinzessin unbestritten. Das Auﬀührungsende lässt seine Freude an der Situation eindeutig erkennen. Bedächtig fällt er zu Boden und veranschaulicht mit feinen Zuckungen, wie das Leben aus seinem Körper weicht. Danach ist er aber umso schneller wieder auf den Beinen, um sich auf der wahllos verstellten Bühne mit seinem viel zu knappen Kostüm vor dem vor Freude laut schreienden Publikum zu verneigen.</span><span className={text1 ? "": "text-white"}> Seine Hingabe weckt meine Zuneigung. Ich möchte mich schützend vor ihn stellen. Der Grund dafür erschliesst sich ihm nicht. Das Lachen des Publikums spornt ihn an. Sein wachsender Übermut ist beklemmend.</span>
                </p>
                <p> 
                <span className={text1 ? "": "text-white"}>Er ist kein Einzelfall. Sie finden sich auf YouTube, unzählige Männer, die in gleicher Manier als Schwanenprinzessinnen verkleidet, mit ihrem Erzeugnis sich selber und ihr Publikum beglücken.</span><span className={text2 ? "": "text-white"}> Diese Entdeckung fasziniert mich. Ich bin sowohl besorgt als erleichtert.</span><span className={text1 ? "": "text-white"}> Ohne es zu wissen, bilden sie eine Gemeinschaft. Ihre Orte setzen keine Bühne voraus. Getanzt wird auch in Turnhallen, Stuben und in Garagen. Hier werden Räume nicht hergerichtet, sondern freigeräumt. Die Proben für die Tänze sind der Vorfreude auf das Spektakel gewidmet. Geprobt wird nicht, um Zusammenstösse oder Fehltritte zu verhindern, denn diese sind Teil des Unterfangens. Mit Nichtbeachtung entziehen sie sich den klassistischen Machtverhältnissen. Ohne jede Verbindung zueinander basteln sie sich die Dinge zurecht. In Gruppen oder allein entfremden sie eine Produktion der legitimen Kultur zu ihrem eigenen Zweck.</span><span className={text2 ? "": "text-white"}> Ich möchte die Dinge vereinfachen. Seinen Humor als rein anarchisch verklären. Herkunft feiern und Scham vergessen. Ihn zum Helden machen. Seinen Tanz exotisieren. Homophobie und Misogynie unter den Teppich kehren. Mein Vater ist ein Dilettant.</span><span className={text3 ? "": "text-white"}> Er ist ein Experte, aber nicht für das Dilettantische.</span> <span className={text2 ? "": "text-white"}>Unterschiede beseelen unsere Welten.</span>
                </p>
        </div>
    )
}

export default TutuComponent