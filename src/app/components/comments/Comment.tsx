import CommentForm from "./CommentForm";

type CommentObject = {
  comment: any,
  replies: any[],
  setActiveComment: any,
  activeComment: any,
  updateComment: any,
  deleteComment: any,
  addComment: any,
  parentId: null,
  currentUserId: string
}

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
}: CommentObject) => {
  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editando";
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "respondiendo";
  const fiveMinutes = 300000;
  const timePassed = new Date().valueOf() - new Date(comment.createdAt).valueOf() > fiveMinutes;
  const canDelete =
    currentUserId === comment.userId && replies.length === 0 && !timePassed;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const replyId = parentId ? parentId : comment.id;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  return (

    <div key={comment.id} className="comment">
      <div className="comment-image-container">
        <img src="../images/aguiladorada.jpeg" width="25px" alt="" />
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div>{createdAt}</div>
        </div>
        {!isEditing && <div className="comment-text">{comment.body}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text: string) => updateComment(text, comment.id)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />

        )
        }

        <div className="comment-actions">
          {canReply && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "respondiendo" })
              }
            >
              Responder
            </div>
          )}
          {canEdit && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "editando" })
              }
            >
              Editar
            </div>
          )}
          {canDelete && (
            <div
              className="comment-action"
              onClick={() => deleteComment(comment.id)}
            >
              Borrar
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Responder"
            handleSubmit={(text: string) => addComment(text, replyId)}
            hasCancelButton={false}
            handleCancel={null}
            initialText={''}
          />

        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment.id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>

        )}

      </div>
    </div>

  );
};

export default Comment;