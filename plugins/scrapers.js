const { command, isPrivate, scraper, getJson, isUrl } = require("../lib");

command(
  {
    pattern: "movie ?(.*)",
    fromMe: true,
    desc: "Movie info",
    type: "search",
  },
  async (message, match) => {
    const movie = await getJson(
      `http://www.omdbapi.com/?apikey=742b2d09&t=${match}&plot=full`
    );

    if (movie.Response !== "True") return await message.reply("*Not found*");
    let msg = "";
    const url = movie.Poster;
    delete movie.Poster;
    delete movie.Response;
    delete movie.Ratings;
    for (const data in movie)
      if (movie[data] != "N/A") msg += `*${data} :* ${movie[data]}\n`;
    if (url == "N/A") return await message.sendMessage(msg.trim());
    return await message.sendMessage(url, { caption: msg.trim() }, "image");
  }
);
command(
  {
    pattern: "spdf ?(.*)",
    fromMe: isPrivate,
    desc: "Converts Site to PDF.",
    type: "tool",
  },
  async (message, match) => {
    match = match || message.reply_message.text;
    if (!match || !isUrl(match)) return await message.reply("_Enter a URL_");

    let url = new URL(match);
    await message.sendFromUrl(
      `https://api.html2pdf.app/v1/generate?url=${match}&apiKey=begC4dFAup1b8LyRXxAfjetfqDg2uYx8PWmh9YJ59tTZXiUyh2Vs72HdYQB68vyc`,
      { fileName: `${url.origin}.pdf`, mimetype: "application/pdf" }
    );
  }
);
