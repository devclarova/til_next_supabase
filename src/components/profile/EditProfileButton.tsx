'use client';
import { Button } from '@/components/ui/button';
import { useOpenProfileEditorModal } from '@/stores/profileEdiotorModal';

export default function EditProfileButton() {
  const openProfileEdotorModal = useOpenProfileEditorModal();
  return (
    <Button
      onClick={openProfileEdotorModal}
      variant='secondary'
      className='cursor-pointer'
    >
      프로필 수정
    </Button>
  );
}
