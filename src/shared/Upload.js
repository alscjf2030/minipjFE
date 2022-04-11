import React from "react";
import {useDispatch, useSelector} from "react-redux";

import Button from "../elements/Button";
import {actionCreators as imageActions} from "../redux/modules/image";

const Upload = (props) => {

    const dispatch = useDispatch()
    const fileInput = React.useRef()

    const is_uploading = useSelector(state => state.image.uploading)

    const selectFile = (e) => {
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.files[0])

        console.log(fileInput.current.files[0])

        // 업로드 파일 미리보기
        const reader = new FileReader();
        const file = fileInput.current.files[0];

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            // console.log(reader.result)
            dispatch(imageActions.setPreview(reader.result))
        }
    }

    return (
        <div>
            <input
                type='file'
                onChange={selectFile}
                ref={fileInput}
                disabled={is_uploading}
            />
        </div>
    )
}

export default Upload;