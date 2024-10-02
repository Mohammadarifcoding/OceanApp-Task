import { useEffect, useRef, useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { MdOutlineFileUpload } from 'react-icons/md';
import cn from '../../../lib/Data/cn';

const UploadWidget = ({ setImage, text, className }) => {
  const [imageCount, setImageCount] = useState(0);
  const [uploadedImages, setUploadedImages] = useState([]);
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'dfdnqi5ns',
        uploadPreset: 'dgc4lgnb',
        multiple: false // Allow only one image upload
      },
      function (error, result) {
        if (result.event === 'success') {
          const newImageUrl = result.info.secure_url;
          setUploadedImages([newImageUrl]); // Replace with a single image
          setImageCount(1);
          setImage(newImageUrl); // Set the image to be passed to CreateCategory
        }
      }
    );
  }, [setImage]);

  const handleRemoveImage = () => {
    setUploadedImages([]); // Clear the image
    setImageCount(0);
    setImage(''); // Clear the image in CreateCategory
  };

  return (
    <div className={cn('flex flex-col items-start', className)}>
      <div onClick={() => widgetRef.current.open()} className="flex w-full cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-2 border-dashed border-primary/30 bg-primary/10 px-4 py-2 text-sm">
        <MdOutlineFileUpload className="text-2xl text-primary" />
        <span className="text-primary">{text}</span>
      </div>
      {/* Display the dynamic image count */}
      {imageCount > 0 && <p className="mt-2 text-sm font-semibold text-green-500">{imageCount} image has been selected</p>}
      {/* Display image previews with close button */}
      {uploadedImages.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          <div className="relative">
            <img src={uploadedImages[0]} alt="Uploaded" className="h-24 w-24 rounded bg-white object-cover p-5 drop-shadow-sm" />
            <IoIosClose className="absolute right-1 top-1 cursor-pointer text-xl text-red-600" onClick={handleRemoveImage} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadWidget;
