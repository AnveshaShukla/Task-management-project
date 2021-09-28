const addCard = () => {
    const newTaskDetails = {    //object creation
       id: `${Date.now()}`,     //date.now is giving new id to every task i.e. new id will be the date of task creation       id, url etc is keys
       url: document.getElementById ("imageURL").value,
       title: document.getElementById("taskTitle").value,
       type: document.getElementById("taskType").value,
       description: document.getElementById ("taskDescription").value
    };

    taskContents=document.getElementById("taskContents");
    taskContents.insertAdjacentHTML('beforeend', generateTaskCard(newTaskDetails));

 }

 const generateTaskCard = ({id, url, title, type, description}) => {   //destructuring the parameter here
    return (`<div class="col-md-6 col-lg-4 mt-3" id=${id} key=${id}>
    <div class="card">
        <div class="card-header">
            <div class="card-header d-flex justify-content-end">
            <button type="button" class="btn btn-outline-info">
                <i class="fas fa-pencil-alt"></i>
            </button>
            <button type="button" class="btn btn-outline-danger">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
    </div>
    <img src=${url} alt="image" class="card-img-top"/>
    <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        <span class="badge bg-primary">${type}</span>
    </div>
    <div class="card-footer">
        <button class="btn btn-outline-primary">Open Task</button>
    </div>
</div>
</div>` )   // added html in js file with template literal; any code can be put inside it
 }