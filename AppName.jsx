import "../Styles/Style1.css";
function AppName() {   
  return (
    <div class="todo-container">
      <h1>To-Do React APP UI</h1>
      <div class="row">
        <div class="col-6">
          <input type="text" placeholder="Enter your ToDo here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div id="btn-success" class="col-2">
        <button type="button">Add</button>

        </div>

         
        <div class="col-6">Complete Todo Project</div>
        <div class="col-4">02/12/2023</div>
        <div class="col-2">
        <button type="button" class="btn btn-danger">Delete</button>
        </div>
        <div class="col-6">Check and Upload Todo Project</div>
        <div class="col-4">02/12/2023</div>
        <div class="col-2">
        <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}
export default AppName;
