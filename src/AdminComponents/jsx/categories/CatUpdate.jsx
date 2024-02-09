// // Import the custom hook

// import useImageFiles from "../../hooks/useImageFiles";


// // Inside CategoryUpdate component
// function CatUpdate() {
//   // Use the custom hook
//   const {
//     files,
//     warning,
//     displayImages,
//     deleteImage,
//     getNumberOfFiles,
//   } = useImageFiles();

//   // ...rest of your code remains unchanged

//   // JSX - Replace your existing file input and file display section with these lines

//   return(
//     <>
//       <input type="file" multiple onChange={(e) => displayImages(e)} />

//   <div className='d-flex' style={{ /* Your styling */ }}>
//     {files.map((file, index) => (
//       <div key={index} style={{ position: "relative" }}>
//         <img
//           src={URL.createObjectURL(file)}
//           width={100}
//           height={150}
//           style={{ /* Your image styling */ }}
//           alt='images'
//         />
//         <button
//           style={{ /* Your delete button styling */ }}
//           onClick={() => deleteImage(index)}
//         >
//           x
//         </button>
//       </div>
//     ))}
//   </div></>
//   )


//   {/* Rest of your component */}
// }
// export default CatUpdate