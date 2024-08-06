$("#postBtn").on("click", function () {
    let postId = $("#idInput").val();
    let postTitle = $('#titleInput').val();
    let content = $('#inputContent').val();

    console.log(postId, postTitle, content);

    $.ajax({
        url: "http://localhost:8080/blog/savePost",
        method: "POST",
        contentType: "application/json",
        "data" : JSON.stringify(
            {
                "id":postId,
                "title" : postTitle,
                "text" : content
            }
        ),
        success: function (results) {
            console.log(results)
        }
    })
})