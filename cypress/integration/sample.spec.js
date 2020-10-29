describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })

  it('finds the content "type"', () => {
    cy.contains('type')
  })
  
  it('clicks the link "type"', () => {
    cy.contains('type').click()
  })

  it('clicking "type" navigates to a new url', () => {
    cy.contains('type').click()

    // Shold be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')
  })

  it('Gets, types and asserts', () => {
    cy.contains('type').click()

    // Shold be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})

