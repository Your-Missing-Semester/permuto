import clubsImage from '../Assets/cardImages/club.png';
import spadesImage from '../Assets/cardImages/spade.png';
import heartsImage from '../Assets/cardImages/heart.png';
import diamondsImage from '../Assets/cardImages/diamond.png';

const cardImagesArr = [spadesImage, heartsImage, clubsImage, diamondsImage]

const GenerateCards = (numCards) => {
    return Array.from({ length: numCards }, (_, index) => ({
        id: index + 1,
        image: cardImagesArr[index % cardImagesArr.length],
        skillName: `Skill ${index + 1}`,
        description:   `Description ${index + 1}`
    }));
};

export default GenerateCards;
