import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { LifeBuoy, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { universityResources } from "@/lib/data";

export default function ResourceHub() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <LifeBuoy className="h-5 w-5 text-primary" />
                    University Resources
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                {universityResources.map(resource => (
                    <Button asChild variant="outline" className="w-full justify-between" key={resource.id}>
                       <Link href={resource.url}>
                         {resource.name}
                         <LinkIcon className="h-4 w-4 text-muted-foreground" />
                       </Link>
                    </Button>
                ))}
            </CardContent>
        </Card>
    );
}
