// Goal is to integrate with html and CSS
    const randomMessage = () => {
        let randomNumber = Math.floor(Math.random() * 6);
        
        switch(randomNumber) {
            case 0:
                return 'You look lovely, lovely!';
            case 1:
                return 'Aye caramba!!!';
            case 2: 
                return 'Bringin sexy back wieee';
            case 3:
                return "Why don't you  get a job";
            case 4:
                return 'I will become the sorcerer king, master of the spellcraft!';
            case 5:
                return 'Majenko is M I N E!';
                
        };

    };

    console.log(randomMessage());
