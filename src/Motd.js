class Motd {
    constructor() {
        this.messages = [
            "Woman was God's second mistake.",
            "He who has a why to live can bear almost any how.",
            "When you stare into the abyss the abyss stares back at you.",
            "To live is to suffer, to survive is to find some meaning in the suffering.",
            "Without music, life would be a mistake.",
            "There are no facts, only interpretations.",
            "Blessed are the forgetful: for they get the better even of their blunders.",
            "I cannot believe in a God who wants to be praised all the time.",
            "That which does not kill us makes us stronger.",
            "He who fights with monsters might take care lest he thereby become a monster. And if you gaze for long into an abyss, the abyss gazes also into you.",
        ]

        this.motdText = document.querySelector(".motd span");
    }

    juggleMessages() {
        const messageNumber = Math.floor(Math.random() * this.messages.length);
        this.motdText.innerHTML = this.messages[messageNumber];
    }

    init() {
        this.juggleMessages();
        
        setInterval(
            () => this.juggleMessages(), 15000
        );
    }
}

export default Motd;