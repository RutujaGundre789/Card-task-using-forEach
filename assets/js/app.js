const cl = console.log;
const postsContainer = document.getElementById("postsContainer");
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
let result = ``;
postsArr.forEach(function(post){
	result +=`
	           <div class="col-md-4 mb-4">
				    <div class="card postcard h-100">
					    <div class="card-header">
						   <h3 class="m-0" data-toggle="tooltip" data-placement="top" title="${post.title}">
						       ${post.title}
						   </h3>
						</div>
						<div class="card-body">
						    <p class="m-0">
							    ${post.body}
							</p>
						</div>
						<div class="card-footer text-right d-flex justify-content-between">
						    <button class="btn btn-primary">Edit</button> 
                            <button class="btn btn-danger">Delete</button>  							
						</div>
					</div>
				</div>
	         `
})


postsContainer.innerHTML = result;