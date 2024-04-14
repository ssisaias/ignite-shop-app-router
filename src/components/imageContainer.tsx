import Image from "next/image";

export interface ImageContainerProps {
  imageUrl: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export function ImageContainer(props: ImageContainerProps) {
  return (
    <div className="bg-gradient-to-b from-[#1ea483] to-[#7465d4] transition delay-150 ease-in-out hover:scale-105 hover:bg-gradient-to-t rounded-lg">
      <Image
        src={props.imageUrl}
        alt=""
        width={520}
        height={480}
        className={`object-cover ${props.className}`}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAELUExURSQkJC8vMDAwMSgoKUxMTTk5OTg4OUVFRkBAQTQ0NRMTExISEignKTg4ODU1NSwsLTExMS4uLgwMDFBQUEJCQzw8PSEhIT09Pf///z9AQB4eHgAAAD09PkJCQrO0tjMzMwgICAAAADg4OSsrLB4eHxgXGDY2NkJCQywsLCYmJjIyMzIyMklJSiIiIigpKSYmJTg4OB4eHhYWFjM7PygpKSYlJTs7PCcnJyYnJ0dHRyUlJSQkJEZGRl1dXSUlJiYmJkhISVJSUyUlJRYWFhQUFCUlJkdHSB8fHxUVFRYWFiEhISgoKS8xMhUVFSYpKkpUWTM4OxYYGS83OxYWFhcYGBMTExcXFxQUFP///4bNLmYAAABLdFJOUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABggEO5qkSwpR4u5mBaSmBgd24u5vBQWYzheOyhUEocoUBHbBwYcMCBISCJR2NosAAAABYktHRBibaYUeAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH6AQNBSMDEEKpYgAAAHRJREFUCNdjYGBkYlZQZGFlY2fg4FRSVlFVU2fjYuDg1tD09tHS5uFl4NPR9fXzD9DT52cQMDA0CgwyNjEVZBASNjMPDrGwFBFlEBOXsAoOtbaRlGKQlrG1Cwu3d5CVZpAWdXRydnF14wAyOeXcPTy9WOSlAQBSEAdwdpLuAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI0LTA0LTEzVDA1OjM0OjQ2KzAwOjAwfYfJCQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNC0wNC0xM1QwNTozNDo0NiswMDowMAzacbUAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjQtMDQtMTNUMDU6MzU6MDMrMDA6MDBifxoJAAAAAElFTkSuQmCC"
      />
    </div>
  );
}
