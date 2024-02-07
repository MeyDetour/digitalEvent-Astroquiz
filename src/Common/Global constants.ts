export class GlobalConstants {
    static baseUrl: string = "https://quizz.esdlyon.dev/"
    static urlFile: string = "/image/"
    static urlImageAvatar: string = '/image/gameDisplay/avatar'


    static compteurId = 2
    static formulaireNumber = 2


    //name of type
    static typeImage = "image"
    static typeMultipleChoice = 'Choix Multiples'

    static typeCitation = 'Citation'
    static typeTrueFalse = 'Vrai ou Faux'
    static typeSoundQuizz = 'Blind Test'
    static typeSimpleQuestion = 'Réponse libre'

    static longueurM1 = 5
    static longueurM2 = 4
    static longueurM3 = 6
    static manche1 = 2
    static startM1 = GlobalConstants.manche1 + 1;
    static endM1 = GlobalConstants.longueurM1 + GlobalConstants.startM1 - 1;
    static manche2 = GlobalConstants.endM1 + 1;
    static startM2 = GlobalConstants.manche2 + 1;
    static endM2 = GlobalConstants.longueurM2 + GlobalConstants.startM2 - 1;
    static manche3 = GlobalConstants.endM2 + 1;
    static startM3 = GlobalConstants.manche3 + 1;
    static endM3 = GlobalConstants.longueurM3 + GlobalConstants.startM3 - 1;
    static bonus = GlobalConstants.endM3 + 1;
    static bonusqts = GlobalConstants.bonus + 1;
    static score = GlobalConstants.bonusqts + 1;
    static videoScore = GlobalConstants.score + 1;
    static alert = GlobalConstants.videoScore + 1;
    static outro = GlobalConstants.alert + 1;

    static party = {
        'intro': 0,
        'videoIntro': 1,

    }

    static avatars = [
        ['anakin.png', 'ANAKIN'],
        ['bobby.png', 'BOBBY'],
        ['buzz.png', 'BUZZ'],
        ['candy.png', 'CANDY'],
        ['darkvador.png', 'DARK VADOR'],
        ['et.png', 'E.T'],
        ['eve.png', 'EVE'],
        ['gamora.png', 'GAMORA'],
        ['groot.png', 'GROOT'],
        ['walle.png', 'WALL-E'],
    ]


}