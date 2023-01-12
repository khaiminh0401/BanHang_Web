import Card from 'react-bootstrap/Card';
import style from './index.module.scss';
function CustomCard({className,textHeader,textBody}) {
    return ( 
        <Card className={`${className} ${style.customCard}`}>
            <Card.Header>
                {textHeader}
            </Card.Header>
            <Card.Text className='d-flex flex-row flex-grow-1 justify-content-center align-items-center'>
                {textBody}
            </Card.Text>
        </Card>
     );
}

export default CustomCard;