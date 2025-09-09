import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-12">
      <Avatar>
        <AvatarImage src="https://imgs.search.brave.com/XomLb0-ypT3qQE804PeAOwBXVI_7xg73lJI-Com6HcU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2IxL1RheWxvcl9T/d2lmdF9hdF90aGVf/MjAyM19NVFZfVmlk/ZW9fTXVzaWNfQXdh/cmRzXygzKS5wbmc" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>


  )
}
