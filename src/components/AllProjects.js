import P1 from './Projects/P1';
function AllProjects() {
    return (
        <div>
            <div className="flex flex-col text-center w-full mb-2">
                <div className="font-medium title-font mb-4 text-bold text-blue-900 text-4xl">Projects</div>
            </div>
            <div>
                <P1 />
            </div>
        </div>
    )
}

export default AllProjects;