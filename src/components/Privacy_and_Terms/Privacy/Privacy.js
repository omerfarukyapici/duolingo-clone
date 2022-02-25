import PrivacyHeader from '../../about_us/Courses/Header/Header';
import PrivacyContent from '../Privacy/Content';

const Privacy = () => {
    window.scrollTo( window.x === 0, window.y === 0);

    return (
        <div>
            <PrivacyHeader /> 
            <PrivacyContent /> 
        </div>
    );
}

export default Privacy;