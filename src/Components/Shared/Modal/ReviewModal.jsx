import { useState } from 'react';
import { useForm } from 'react-hook-form';
import cn from '../../../lib/Data/cn';
import TextArea from '../InputField/TextArea';
import Rating from '../Rating/Rating';

const ReviewModal = ({ className }) => {
  const [openModal, setOpenModal] = useState(false);
  // form
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log('value', data);
  };

  return (
    <div className="">
      <button onClick={() => setOpenModal(true)} className={cn('rounded-sm bg-primary px-8 py-2 text-sm text-white', className)}>
        Give Review
      </button>
      <div onClick={() => setOpenModal(false)} className={`fixed z-[100] flex items-center justify-center ${openModal ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}>
        <form onSubmit={handleSubmit(onSubmit)} onClick={(e_) => e_.stopPropagation()} className={`absolute space-y-6 rounded-lg bg-white p-6 drop-shadow-lg dark:bg-gray-800 dark:text-white md:w-[30%] ${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'}`}>
          {/* infos */}
          <div className="space-y-3">
            <p className="text-sm font-bold">Give a review to Osmania Skill Master</p>
            <div className="flex items-center justify-start gap-4">
              <Rating />
              <p className="text-xs">4 Star</p>
            </div>

            <TextArea register={register} name="review" placeholder="Write your review" />
            {errors.review && <p className="text-xs text-red-600">{errors.review.message}</p>}
          </div>
          {/* infos */}
          <div className="space-y-3">
            <p className="text-sm font-bold">Rate Ryan Isac</p>
            <div className="flex items-center justify-start gap-4">
              <Rating />
              <p className="text-xs">4 Star</p>
            </div>

            <TextArea register={register} name="secondReview" placeholder="Write your review" />
          </div>

          <button type="submit" className="rounded-sm bg-primary px-8 py-2 text-sm text-white">
            Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
