import { startTransition, useEffect, useState } from "react";
import { useApiStatus } from "../../../context/customHooks";
import "./ApiStatus.css";

export function ApiStatus() {
  const { state: apiState, refresh } = useApiStatus();

  const [visible, setVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Pending & Error case
    if (apiState === "pending" || apiState === "error") {
      startTransition(() => {
        setVisible(true);
        setIsFadingOut(false);
      });

      return;
    }

    // Success → göster ve sonra fade-out
    if (apiState === "success") {
      startTransition(() => {
        setVisible(true);
        setIsFadingOut(false);
      });

      const timer = setTimeout(() => {
        setIsFadingOut(true); // start fade-out

        // wait to finish fade-out  → remove from DOM
        setTimeout(() => setVisible(false), 300);
      }, 1500);

      return () => clearTimeout(timer);
    }

    // 'idle' case
    startTransition(() => {
      setVisible(false);
      setIsFadingOut(false);
    });
  }, [apiState]);

  if (!visible) return null;

  const label =
    apiState === "pending" ? (
      <>
        <span className="loader" />
        <span>Bağlanılıyor...</span>
      </>
    ) : apiState === "success" ? (
      "Bağlantı kuruldu"
    ) : apiState === "error" ? (
      <>
        <span>Bağlantı sorunu</span>
        <i className="fa fa-refresh" aria-hidden="true"></i>
      </>
    ) : (
      "Durum bilinmiyor"
    );

  const classApiState = [
    "api-state",
    apiState === "pending"
      ? "pending"
      : apiState === "success"
        ? "active"
        : apiState === "error"
          ? "inactive"
          : "",
    isFadingOut ? "fade-out" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classApiState}
      title={apiState === "error" ? "Yeniden denemek için tıkla" : ""}
      onClick={() => apiState === "error" && refresh()}
      aria-label={
        apiState === "error"
          ? "Bağlantı sorunu. Yeniden denemek için dokun."
          : undefined
      }
    >
      {label}
    </div>
  );
}
