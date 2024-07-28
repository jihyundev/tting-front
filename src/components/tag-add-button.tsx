import {useEffect, useState} from "react";
import {Loader2} from "lucide-react";
import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {TagColorPicker} from "@/components/tag-color-picker";
import {useTagCreate} from "@/hooks/use-tag-create";
import {TagColors} from "@/types/tag-colors";
import {Typography} from "@/components/typography";

export const TagAddButton = () => {
    const [name, setName] = useState('');
    const [color, setColor] = useState<TagColors>('color1');
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const { mutate, isPending, isSuccess, isError, errorMessage } = useTagCreate();
    const onSubmitTag = () => {
        mutate({ name, color });
    };

    const isButtonDisabled = !name || !color || isPending;

    useEffect(() => {
        if (isSuccess) {
            setIsAddModalOpen(false);
        }
    }, [isSuccess]);

    return (
    <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogTrigger asChild>
            <Button type="button">태그 추가</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>태그</DialogTitle>
                <DialogDescription className="hidden">
                    태그 추가, 수정
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label
                        htmlFor="name"
                        className="text-right"
                    >
                        이름
                    </Label>
                    <Input
                        id="name"
                        className="col-span-3"
                        maxLength={8}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="color" className="text-right">
                        색상
                    </Label>
                    <div className="col-span-3">
                        <TagColorPicker onSelectColor={(color) => {
                            setColor(color)
                        }}/>
                    </div>
                </div>
            </div>
            <DialogFooter>
                {isError && errorMessage && (
                    <Typography variant="alert">{errorMessage}</Typography>
                )}
                <Button
                    type="submit"
                    disabled={isButtonDisabled}
                    onClick={onSubmitTag}
                >
                    {isPending ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            저장중
                        </>
                    ) : "저장하기"}
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
    )
}
