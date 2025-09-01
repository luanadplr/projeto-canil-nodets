import { Request, Response } from "express"
import { createMenuObject } from '../helpers/createMenuObject'
import { Pet } from '../models/Pet'

export const search = (request: Request, response: Response) => {
    let query: string = request.query.q as string
    let list = Pet.getFromName(query)

    if(!query){
        response.redirect('/')
        return
    }

    response.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    })
}