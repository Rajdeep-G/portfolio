import P1 from './Projects/P1';
import P2 from './Projects/P2';
import P3 from './Projects/P3';
import P4 from './Projects/P4';
function AllProjects() {
    return (
        <div>
            <div className="flex flex-col text-center w-full mb-2">
                <div className="font-medium title-font mb-4 text-bold text-blue-900 text-4xl">Projects</div>
            </div>
            <div>
                <P1 />
            </div>
            <div>
                <P2 />
            </div>
            <div>
                <P3 />
            </div>

            <div>
                <P4 />
            </div>
        </div>
    )
}

export default AllProjects;