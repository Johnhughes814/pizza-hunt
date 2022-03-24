function handleNewReplySubmit(event) {
    event.preventDefault();
  
    if (!event.target.matches('.reply-form')) {
      return false;
    }
  
    const commentId = event.target.getAttribute('data-commentid');
  
    const writtenBy = event.target.querySelector('[name=reply-name]').value;
    const replyBody = event.target.querySelector('[name=reply]').value;
  
    if (!replyBody || !writtenBy) {
      return false;
    }
  
    const formData = { writtenBy, replyBody };
  
    fetch(`/api/comments/${pizzaId}/${commentId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        response.json();
      })
      .then(commentResponse => {
        console.log(commentResponse);
        location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  $backBtn.addEventListener('click', function() {
    window.history.back();
  });
  