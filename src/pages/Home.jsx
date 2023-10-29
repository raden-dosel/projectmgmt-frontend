import Clients from "../components/Clients";
import Projects from "../components/Projects";
import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";

export default function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        {/* Add Client Modal */}
        <AddClientModal />
        {/* Add Project Modal */}
        <AddProjectModal />
      </div>
      {/* Projects */}
      <Projects />
      <hr />
      {/* Clients */}
      <Clients />
    </>
  );
}
