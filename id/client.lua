Citizen.CreateThread(function()
    while true do
        Citizen.Wait(1000) 
        local playerId = GetPlayerServerId(PlayerId())
        SendNUIMessage({
            type = "updatePlayerID",
            playerID = playerId
        })
    end
end)
