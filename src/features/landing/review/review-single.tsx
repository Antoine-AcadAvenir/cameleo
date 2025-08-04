import { Typography } from "@/components/nowts/typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ClientMarkdown } from "@/features/markdown/client-markdown";
import { Layout } from "@/features/page/layout";

type ReviewSingleProps = {
  /**
   * The image of the user.
   */
  image: string;
  /**
   * The review of the user. Use **bold** text to highlight.
   */
  review: string;
  /**
   * The name of the user.
   */
  name: string;
  /**
   * The role of the user. (his job)
   */
  role: string;
  /**
   * A compagny image if the user is working for a compagny.
   */
  compagnyImage?: string;
};

export const ReviewSingle = (props: ReviewSingleProps) => {
  return (
    <Layout className="flex flex-col items-center gap-8">
      <div className="flex flex-1 flex-col gap-4">
        <ClientMarkdown className="citation prose-2xl text-center">
          {props.review}
        </ClientMarkdown>
        <div className="m-auto flex gap-2">
          <Avatar className="size-16">
            <AvatarFallback>{props.name[0]}</AvatarFallback>
            <AvatarImage src={props.image} alt={props.name} />
          </Avatar>
          <div className="flex flex-col gap-0.5">
            <Typography variant="large">{props.name}</Typography>
            <p className="inline-flex items-center gap-0.5">
              <Typography as="span" variant="small">
                {props.role}
              </Typography>
              {props.compagnyImage ? (
                <>
                  <span></span>

 <Avatar className="w-20 h-10 rounded-lg overflow-visible">
  <img
    src={props.compagnyImage}
    alt="Logo entreprise"
    className="w-full h-full object-contain rounded-xl scale-70"
  />
</Avatar>
                </>
              ) : null}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
