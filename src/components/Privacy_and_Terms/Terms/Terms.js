import Header from '../../about_us/Courses/Header/Header';
import Content from '../Terms/Content';

const Terms = () => {
    window.scrollTo( window.x === 0, window.y === 0);

    return (
        <div>
            <Header />
            <Content />
        </div>
    );
}

export default Terms;