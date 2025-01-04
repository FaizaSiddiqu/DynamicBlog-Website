import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";


interface Comment {
  id: string;
  auther: string;
  text: string;
}

interface CommentsSectionProps {
  postId: string;
}

export default function CommentSection({ }: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [autherName, setAutherName] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const handleAddComment = () => {
    if (newComment.trim() && autherName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        auther: autherName,
        text: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
      setAutherName("");
    }
  };

  const handleEditComment = (commentID: string) => {
    const commenttoEdit = comments.find((comment) => comment.id === commentID);
    if (commenttoEdit) {
      setNewComment(commenttoEdit.text);
      setAutherName(commenttoEdit.auther);
      setEditingCommentId(commentID);
    }
  };

  const handleSaveEditComment = () => {
    if (newComment.trim() && autherName.trim() && editingCommentId) {
      const updatedComments = comments.map((comments) =>
        comments.id === editingCommentId
          ? { ...comments, text: newComment, auther: autherName }
          : comments
      );
      setComments(updatedComments);
      setNewComment("");
      setAutherName("");
      setEditingCommentId(null);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold">Comments</h2>

      <div className="mt-4 space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="p-4">
                <div className="font-semibold">{comment.auther}</div>
                <p>{comment.text}</p>
                <Button
                  onClick={() => handleEditComment(comment.id)}
                  className="mt-2 bg-orange-500 hover:bg-orange-700 text-white"
                >
                  Edit
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-slate-400"> No Comments Yet</p>
        )}
      </div>

      <div className="mt-6">
        <Input
          type="text"
          value={autherName}
          onChange={(e) => setAutherName(e.target.value)}
          placeholder="Your Name"
          className="w-full mb-2"
        />

        <Input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="w-full mb-2"
        />

        <Button
          onClick={editingCommentId ? handleSaveEditComment : handleAddComment}
          className="mt-4 bg-orange-500 hover:bg-orange-700 text-white"
        >
          {editingCommentId ? "Save" : "Submit"}
        </Button>
      </div>
    </div>
  );
}
