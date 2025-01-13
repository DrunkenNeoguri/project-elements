"use client";

import { useState } from "react";
import Form from "../../../../../components/form/form";

export default function Edit() {
  const [nickname, setNickname] = useState<Record<string, string>>({});

  const handleOnSubmit = () => {
    return;
  };

  return (
    <>
      <div className="flex flex-col gap-[10px] box-border w-full px-4 break-keep mb-4">
        <h2 className="font-bold24 text-black">프로필을 수정하실건가요?</h2>
        <span className="font-medium12 text-black">
          변경하고 싶은 사항이 있으시다면 내용을 수정 후 저장 버튼을 눌러주세요.
        </span>
      </div>
      <Form
        onSubmit={handleOnSubmit}
        formData={nickname}
        setFormData={setNickname}
        styles="px-4"
      >
        <div className="flex flex-col mb-3">
          <Form.Label htmlFor="username">닉네임</Form.Label>
          <Form.Input id="username" type="text" />

          <Form.ErrorText>asdgasdg</Form.ErrorText>
        </div>
      </Form>
    </>
  );
}
