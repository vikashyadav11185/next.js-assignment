import React from "react";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

export default function PostDetail({ post, onClose }) {
  if (!post) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-card" onClick={(e) => e.stopPropagation()}>
          <div className="icon-container">
            <DocumentTextIcon className="icon" />
          </div>
          <h2 className="post-title">{post.title}</h2>
          <div className="post-content-container">
            <p className="post-content">{post.content}</p>
          </div>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 1rem;
        }

        .modal-card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          position: relative;
          max-width: 600px;
          width: 90%;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          animation: fadeIn 0.3s ease;
        }

        .icon-container {
          position: absolute;
          top: -20px;
          left: 24px;
          background-color: #dbeafe;
          padding: 0.5rem;
          border-radius: 9999px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        .icon {
          height: 32px;
          width: 32px;
          color: #3b82f6;
        }

        .post-title {
          margin-top: 16px;
          font-size: 1.5rem;
          font-weight: bold;
          color: #1e3a8a;
          margin-bottom: 1rem;
        }

        .post-content-container {
          flex: 1;
          overflow-y: auto;
          margin-bottom: 1rem;
        }

        .post-content {
          color: #374151;
          line-height: 1.6;
          white-space: pre-line;
        }

        .close-button {
          padding: 0.75rem 1.5rem;
          background-color: #3b82f6;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s ease;
          align-self: flex-end;
        }

        .close-button:hover {
          background-color: #2563eb;
          transform: translateY(-1px);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 640px) {
          .modal-card {
            padding: 1.5rem;
          }

          .post-title {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </>
  );
}
