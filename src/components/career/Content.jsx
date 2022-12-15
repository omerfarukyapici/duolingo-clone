import Benefits from "./Benefits";
import JobOpening from "./JobOpenings";
import JobSlider from "./Slider"

const Jobs = () => {

    return (
        <div className="pt-6 md:pt-12">
            <JobSlider />
            <JobOpening />
            <Benefits />
        </div>
    );
}
export default Jobs;