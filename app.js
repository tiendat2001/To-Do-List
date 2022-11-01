// alert("test");

// doi load het trang web r bat dau
window.addEventListener('load',() =>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el=document.querySelector("#tasks");

    // console.log(form);

    // tranh refresh moi lan submit  SU KIEN SAU KHI AN NUT SUBMIT
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const task = input.value;

        if(!task){
            alert("nhap cong viec can them");
            return;

        }

     
        // tao 1 the div
        const task_el=document.createElement("div");
        // add 1 class = "task" vao the div
        // lan luot tao the nhu trong html tạo 1 thẻ div class task, bên trong có 1 thẻ div class content, bên trong nx có 1 thẻ input class text
        task_el.classList.add("task");
        // tao 1 the div class content ben trong the div class task
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        task_el.appendChild(task_content_el);

        const task_input_el=document.createElement("input");
        task_input_el.id="congviec";

        task_input_el.classList.add("text");

        // set cac thuoc tinh cho the input
        task_input_el.type="text";
        task_input_el.value=task;
        task_input_el.setAttribute("readonly","readonly");
        task_content_el.appendChild(task_input_el);
        

        // tao 1 the div class action, ben trong co 2 nut button class edit va delete
        const task_action_el = document.createElement("div");
        task_action_el.classList.add("action");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit")
        task_edit_el.innerHTML="Sửa";
        // nut xoa
        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML="Xóa";
        
        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_delete_el);
        
        
        // tao space giua moi div task (làm lại đang làm thủ công)
        const space_div=document.createElement("div");
        space_div.classList.add("space");
        space_div.innerHTML="dddddddddd";
        list_el.appendChild(space_div);



        task_el.appendChild(task_action_el);
        list_el.appendChild(task_el);
       
      

        input.value="";


   
        task_delete_el.addEventListener("click",()=>{
            list_el.removeChild(task_el);
            // task_el.remove();
        })
    })

})