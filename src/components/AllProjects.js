import P1 from './Projects/P1';
import P2 from './Projects/P2';
import P3 from './Projects/P3';
import P4 from './Projects/P4';
function AllProjects() {
    return (
        <div>
            <div className="flex flex-col text-center w-full mb-2 mt-24">
                <div className="font-medium title-font mb-4 text-bold text-blue-900 text-4xl">Projects</div>
            </div>
            <div className="md:ml-48">
                <P1 />
            </div>
            <div className="md:mr-16">
                <P2 />
            </div>
            <div className="md:ml-48">
                <P3 />
            </div>

            <div className="md:mr-16">
                <P4 />
            </div>
        </div>
    )
}

export default AllProjects;