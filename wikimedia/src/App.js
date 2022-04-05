import { useState } from "react";
import { Button } from "reactstrap";
import { SourceModal } from "./SourceModal";
import { Groups } from "./Groups";
function App() {
  const [isSourceModalOpen, SetIsSourceModalOpen] = useState(false);
  const [isCreateGroup, SetIsCreateGroup] = useState(false);
  return (
    <>
      <div className=" mt-3 ms-3">
        <div className="mt-1">
          <Button
            color="success"
            onClick={() => {
              SetIsSourceModalOpen(!isSourceModalOpen);
            }}
          >
            SOURCE
          </Button>
        </div>
        <div className="mt-1">
          <Button
            color="success"
            onClick={() => {
              SetIsCreateGroup(!isCreateGroup);
            }}
          >
            CREATE A GROUP
          </Button>
        </div>
        <div className="mt-1">
          <Button color="success">ADD TO GROUP</Button>
        </div>
        <SourceModal
          isSourceModalOpen={isSourceModalOpen}
          SetIsSourceModalOpen={SetIsSourceModalOpen}
        />
        <Groups
          isCreateGroup={isCreateGroup}
          SetIsCreateGroup={SetIsCreateGroup}
        />
      </div>
    </>
  );
}

export default App;
