interface VisitorCfProperties {
  country?: string | null;
  city?: string | null;
  region?: string | null;
  regionCode?: string | null;
  timezone?: string | null;
  latitude?: string | null;
  longitude?: string | null;
  postalCode?: string | null;
  continent?: string | null;
  asn?: number | null;
  asOrganization?: string | null;
  colo?: string | null;
}

interface VisitorEnv {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
}

interface VisitorContext {
  request: Request & { cf?: VisitorCfProperties };
  env: VisitorEnv;
}

const jsonHeaders = {
  "Content-Type": "application/json; charset=UTF-8",
  "Cache-Control": "no-store, no-cache, must-revalidate, private",
  Pragma: "no-cache",
};

export default {
  async fetch(request: Request, env: VisitorEnv): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/visitor-info") {
      if (request.method !== "GET") {
        return new Response(
          JSON.stringify({ error: "Method Not Allowed" }),
          {
            status: 405,
            headers: {
              ...jsonHeaders,
              Allow: "GET",
            },
          },
        );
      }

      const cf = (request as Request & { cf?: VisitorCfProperties }).cf;

      const response = {
        ip:
          request.headers.get("CF-Connecting-IP") ||
          request.headers.get("X-Real-IP") ||
          "",
        country: cf?.country || request.headers.get("CF-IPCountry") || "",
        region: cf?.region || "",
        region_code: cf?.regionCode || "",
        city: cf?.city || "",
        postal_code: cf?.postalCode || "",
        continent: cf?.continent || "",
        latitude: cf?.latitude || "",
        longitude: cf?.longitude || "",
        timezone: cf?.timezone || "",
        asn: cf?.asn ?? "",
        asn_organization: cf?.asOrganization || "",
        colo: cf?.colo || "",
        user_agent: request.headers.get("User-Agent") || "",
      };

      return new Response(JSON.stringify(response), {
        status: 200,
        headers: jsonHeaders,
      });
    }

    return env.ASSETS.fetch(request);
  },
};
