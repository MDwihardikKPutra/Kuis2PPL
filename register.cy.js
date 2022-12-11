describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost/myumkm/index.php/home/#kategori')
    cy.get("a[href='http://localhost/myumkm/index.php/administrator']").click()
    cy.get("a[href='http://localhost/myumkm/index.php/admin/register']").click()
    cy.get("input[name='xnama']").type('Putra');
    cy.get("textarea[name='xtentang']").type('Penjual tomat');
    cy.get("input[name='xemail']").type('putra@email.com');
    cy.get("input[name='xpemilik']").type('putra');
    cy.get("textarea[name='xalamat']").type('suhat');
    cy.get("input[name='xusername']").type('putra05');
    cy.get("input[name='xpassword']").type('12345');
    cy.get("input[name='xpassword2']").type('12345');
    cy.get("input[name='xkontak']").type('09876543212');
    cy.get('select').select('Author').should('have.value', '2')
    cy.get('input[type=file]').selectFile('cypress/e2e/images/putra.jpeg')
    cy.get("button[class='btn btn-primary btn-flat']").click()
  })
})