import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormPrc() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('폼 제출 성공: ', data);
  };

  const onError = (err) => {
    console.log('폼 제출 실패: ', err);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <label htmlFor="name">이름</label>
        <input
          type="text"
          placeholder="이름"
          id="name"
          {...register('name', {
            required: '이름은 필수 항목입니다.',
          })}
        />
        {errors.username?.message}
        <br />
        <label htmlFor="age">나이</label>
        <input
          type="number"
          placeholder="나이"
          id="age"
          {...register('age', {
            required: '나이를 입력해주세요.',
            validate: {
              name: (v) => v > 0 || '0 이상의 숫자만 입력 가능합니다',
            },
          })}
        />
        <button type="submit">제출</button>
      </form>
    </div>
  );
}
