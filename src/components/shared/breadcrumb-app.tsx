import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbAppProps = {
  pathSegments: string[];
};

const BreadcrumbApp = ({ pathSegments }: BreadcrumbAppProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathSegments.map((segment, index) => {
          const isLast = index == pathSegments.length - 1;
          return (
            <div key={index} className="flex items-center gap-2">
              {!isLast ? (
                <>
                  <BreadcrumbItem key={index}>
                    <BreadcrumbLink asChild>
                      <Link
                        href={`/${pathSegments.slice(0, index + 1).join("/")}`}>
                        {segment}
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight />
                  </BreadcrumbSeparator>
                </>
              ) : (
                <BreadcrumbItem>
                  <BreadcrumbPage>{segment}</BreadcrumbPage>
                </BreadcrumbItem>
              )}
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbApp;
