import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import logo from "../assets/logo.png";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useDeleteBoardMutation } from "../redux/apiCrudOp/deleteBoard";
import { useEffect } from "react";
import Toast from "./CustomToast";
import { useNavigate, useParams } from "react-router-dom";
import { useGetBoardQuery } from "../redux/apiCrudOp/getBoard";
import { useUpdateBoardMutation } from "../redux/apiCrudOp/updateBoard";
import { useGetSingleBoardQuery } from "../redux/apiCrudOp/getSingleBoard";

const Navbar = () => {
  const { boardId } = useParams();
  const [setDeleteBoard, { data: deleteResponse }] = useDeleteBoardMutation();
  const { data: allBoards } = useGetBoardQuery();
  const [setFavoriteBoardData, { data: favoriteResponse }] =
    useUpdateBoardMutation();
  const { data: singleBoard } = useGetSingleBoardQuery(boardId);
  const [favoriteBoard, setFavoriteBoard] = useState(singleBoard?.favourite);

  // delete board
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setDeleteBoard(boardId);

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const handleFavorite = () => {
    if (singleBoard) {
      setFavoriteBoard(!favoriteBoard);
      setFavoriteBoardData({
        boardId,
        favourite: singleBoard?.favourite ? false : true,
      });
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (deleteResponse) {
      Toast.fire({
        icon: "success",
        title: "Deleted successfully",
      });
      navigate(`/board/${allBoards?.[0]._id}/section` || "/");
    }
    if (favoriteResponse) {
      Toast.fire({
        icon: "success",
        title: `Favorite ${
          singleBoard?.favourite ? "remove" : "add"
        } successfully`,
        position: "top",
      });
    }
  }, [deleteResponse, favoriteResponse]);

  console.log(singleBoard?.favourite, favoriteBoard);
  return (
    <nav className="flex justify-between">
      <div className="flex gap-2 items-center">
        <img src={logo} alt="logo" className="h-8" />{" "}
        <span className="font-bold text-xl text-gray-600">T O D O</span>
      </div>
      <div className="flex gap-2 items-center">
        <button
          onClick={handleFavorite}
          className="text-3xl focus:outline-none text-orange-600 hover:text-yellow-600"
        >
          {favoriteBoard && singleBoard?.favourite ? (
            <AiFillStar />
          ) : (
            <AiOutlineStar />
          )}
        </button>
        <button
          onClick={handleDelete}
          className="text-2xl focus:outline-none text-red-300 hover:text-red-500"
        >
          <FaTrash />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
