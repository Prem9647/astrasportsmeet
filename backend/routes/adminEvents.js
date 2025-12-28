router.put("/events/:id", async (req, res) => {
  const { timing, venue, image, players } = req.body;

  const updatedEvent = await Event.findByIdAndUpdate(
    req.params.id,
    {
      timing,
      venue,
      image,
      players
    },
    { new: true }
  );

  res.json(updatedEvent);
});
